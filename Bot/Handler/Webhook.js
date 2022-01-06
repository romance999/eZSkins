const fs = require("fs");

function SendWebhook()
{
    let msg =
    {
        "content": content
    };

    axios({
      url: url,
      data: JSON.stringify(msg),
      method: "POST",
      headers:
      {
        "Content-Type": "application/json"
      }
    });
}

module.exports =
{
    SendWebhook
}
