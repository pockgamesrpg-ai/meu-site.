// ========================================
// INICIA SERVIDOR
// ========================================

app.listen(
    PORT,
    () => {

        console.log("");
        console.log(
            "================================="
        );

        console.log(
            "🎮 BLUEVAULT GAMES"
        );

        console.log(
            "================================="
        );

        console.log("");

        console.log(
            "✅ Local:"
        );

        console.log(
            `http://localhost:${PORT}`
        );

        console.log("");

        console.log(
            "🌐 Público:"
        );

        console.log(
            PUBLIC_URL
        );

        console.log("");

        console.log(
            "🔔 Webhook:"
        );

        console.log(
            `${PUBLIC_URL}/webhook`
        );

        console.log("");

        console.log(
            "================================="
        );

    }
);
