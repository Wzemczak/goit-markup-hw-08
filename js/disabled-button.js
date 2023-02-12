function toggle_submit(el) {
	let disabled = el.checked ? undefined : 'true'
	document.getElementById('modal-window__btnAccept').disabled = disabled
}
