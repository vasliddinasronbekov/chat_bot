
const  sendMessage = async () => {
    const message = document.getElementById("message").value;
    const wrapper = document.getElementById("responce")

    const bot_responce =  document.createElement("p")
    const message_tag = document.createElement("p")
    message_tag.setAttribute("class", "user_message")
    bot_responce.setAttribute("class", "bot_responce")
    message_tag.textContent = message
    wrapper.appendChild(message_tag)
    
    const response = await eel.ai_bot(message)();
    bot_responce.innerHTML = response
    wrapper.appendChild(bot_responce)
}