
export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const scriptUrl =
            "https://script.google.com/macros/s/AKfycbyj9mFGckBeatnPgJSS8kIdO-UV2W-YV4x9JSk3EnCQfWt2-8jweyZowJwq7ssWp9jM/exec";

        const r = await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body),
        });

        const text = await r.text(); // иногда GAS возвращает не JSON
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json({ ok: true, result: text });
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
}
