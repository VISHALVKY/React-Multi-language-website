
export const langList = {
    en: "English",
    fr: "French",
    es: "Spanish",
    hi: "Hindi",
    pt: "Portuguese",
    zh: "Chinese"
}

export function getLang() {
    const langKeys = Object.keys(langList);

    for(let i = 0; i < langKeys.length; i++) {
        if(window.location.href.includes(langKeys[i])) {
            // based on the language set the text direct
            if(langKeys[i] === "ar"){
                document.body.classList.add("ar")
            } else {
                document.body.classList.remove("ar")
            }

            return langKeys[i]
        }
    }

    // for the first load
    window.location = "en"

}