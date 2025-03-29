function sendEmbed() {
    const webhookURL = document.getElementById("webhook").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const color = parseInt(document.getElementById("color").value.replace("#", ""), 16);

    if (!webhookURL) return alert("الرجاء إدخال رابط Webhook");

    const payload = {
        embeds: [{
            title: title,
            description: description,
            color: color
        }]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) alert("تم إرسال الرسالة بنجاح!");
        else alert("فشل الإرسال، تحقق من الرابط.");
    });
}