import * as Fonts from "./fonts.js"
var SearchParams = new URLSearchParams(window.location.search);

var Query = String(SearchParams.get("q")) || "";
var FontStyle = SearchParams.get("font") || "";
const ASCIIOutput = document.getElementById("ascii-output");

const TemplatedBased = [
    "simple",
    "bordered",
]

const SingleCased = [
    "dots",
]

if (Query) {
    for (var i = 0; i < Query.length; i++) {
        var CharacterElement = ASCIIOutput.appendChild(document.createElement("div"));
        CharacterElement.style.display = "inline-block";
        CharacterElement.style.color = "black";
        CharacterElement.style.fontSize = "1em";

        if (SingleCased.includes(FontStyle)) {
            Query = Query.toLowerCase();
        }

        if (TemplatedBased.includes(FontStyle)) {
            CharacterElement.innerText = String(Fonts.data[FontStyle]["*"]).replace("CHAR", Query[i]);
        } else {
            if (Fonts.data[FontStyle][Query[i]] === undefined) {
                CharacterElement.innerText = Query[i];
                continue;
            }

            CharacterElement.innerText = String(Fonts.data[FontStyle][Query[i]]);
        }

        if (Query[i] === " ") {
            const SpacePadding = Fonts.data[FontStyle][" "] || "0.5em";
            CharacterElement.innerHTML = `<span style="margin: ${SpacePadding}"></span>`
        }
    }
}
