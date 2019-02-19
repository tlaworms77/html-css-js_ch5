/**
 * 
 */
var tabBox = {
	__liSelected : null,
	init : function() {
		document.getElementById("tab1").onclick = this.__onClicked;
		document.getElementById("tab2").onclick = this.__onClicked;
		document.getElementById("tab3").onclick = this.__onClicked;
		document.getElementById("tab4").onclick = this.__onClicked;
		document.getElementById("tab5").onclick = this.__onClicked;
		onclick = this.__onClicked
	},
	__onClicked : function(li) {
		// onclicked 받은 element 가 바로 this이다.
		if (tabBox.__liSelected != null) {
			// unselect
			tabBox.__liSelected.className = "";
		}
		// select
		this.className = "selected";
		tabBox.__liSelected = li;
	}
}