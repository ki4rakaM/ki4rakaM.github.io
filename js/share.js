const sharePopup = document.getElementById("share-popup")

for (const button of document.querySelectorAll(".nav-share")) {
	button.addEventListener("click", async () => {
		await navigator.clipboard.writeText(window.location.href)

		sharePopup.style.animation = "none"
		void sharePopup.offsetWidth
		sharePopup.style.animation = ""
	})
}