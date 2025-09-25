const sharePopup = document.getElementById("share-popup")

const shareButton = document.getElementById("share")
shareButton.addEventListener("click", async () => {
	await navigator.clipboard.writeText(window.location.href)

	sharePopup.style.animation = "none"
	void sharePopup.offsetWidth
	sharePopup.style.animation = ""
})