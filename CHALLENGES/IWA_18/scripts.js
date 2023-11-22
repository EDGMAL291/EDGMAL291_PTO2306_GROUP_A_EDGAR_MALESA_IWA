import {
    html,
    createOrderHtml,
    moveToColumn,
    updateDraggingHtml,
  } from "./view.js";
  import { COLUMNS, createOrderData, state, updateDragging } from "./data.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */


const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
};
let draggedId;

const handleDragStart = (event) => {

    draggedId = event.target.dataset.id;
    event.dataTransfer.setData("text/plain", draggedId);
};

const handleDragEnd = (event) => {      
    const orderId = state.dragging.source;      
    const newColumn = state.dragging.over;
  
    if (newColumn && orderId) {
      moveToColumn(orderId, newColumn);
      state.orders[orderId].column = newColumn;
    }
  
    state.dragging = { source: null, over: null };
  };

  

const handleHelpToggle = (event) => {

    const helpButton = event.target === html.other.help;
    const closeButton = event.target === html.help.cancel;
    const helpOverlay = html.help.overlay;

    if (helpButton) {
      helpOverlay.show();
    } else if (closeButton) {
      helpOverlay.close();
      focus(); 
    }
  };

const handleAddToggle = (event) => {

    const addButton = event.target === html.other.add;
    const closeButton = event.target === html.add.cancel

    const overlay = html.add.overlay;
    const formField = html.add.form;

    if (addButton){
        overlay.show();

    }else if (closeButton){
        overlay.close();
        formField.reset();
        focus()
    }
};

const handleAddSubmit = (event) => {
    event.preventDefault(); 

    const title = html.add.title.value;
    const table = html.add.table.value;

    const overlay = html.add.overlay;
    const formField = html.add.form;

    const newOrder = createOrderData({ title, table, column: 'ordered' });
    const orderHtml = createOrderHtml(newOrder);
    const ordered = html.columns.ordered;

    ordered.appendChild(orderHtml);
    formField.reset();
    overlay.close()
    focus();
};

const handleEditToggle = (event) => {
    const order = event.target.closest(".order");
    const cancelButton = event.target === html.edit.cancel;

    const formFields = html.edit.form;
    const overlay = html.edit.overlay;

    let orderID = event.target.dataset.id;
   
  
    if (order) {
      overlay.show();

    } else if (cancelButton) {
      overlay.close();
      formFields.reset();
      focus();

    }
  };
  

const handleEditSubmit = (event) => {
    event.preventDefault();
  
    const updateButton = event.target === html.edit.form;
    const overlay = html.edit.overlay;
  
    const newTitle = html.edit.title.value;
    const newTable = html.edit.table.value;
    const newStatus = html.edit.column.value;
    const formFields = html.edit.form;
    const orderHtml = document.querySelector(`[data-id="${orderID}"]`);
  
    if (updateButton) {
      orderHtml.querySelector("[data-order-title]").textContent = newTitle;
      orderHtml.querySelector("[data-order-table]").textContent = newTable;
    
      moveToColumn(orderID, newStatus);
      formFields.reset();
      overlay.close();
      focus();
    } else {
        console.error("Element with the given orderID not found");
    }
  };

  const handleDelete = (event) => {
    const deleteButton = event.target === html.edit.delete;
    const order = document.querySelector(`[data-id='${orderID}']`);

    if (deleteButton && order) {
        order.remove();
        overlay.close();
        focus(); 
    } else if (!order) {
        console.error(`Element with orderID '${orderID}' not found`);
    } else {
       
    }
};

//add order, cancel order, add to order (adding eventListeners)
html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

//edit order, cancel edit, confrim edit order, delete order (adding eventListeners)
html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

//help and cancel help eventListeners
html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)
//dragging orders event listeners
for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}
//dragging over columns event listener
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
};