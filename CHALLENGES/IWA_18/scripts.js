import { html } from "./view";

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
}

//event handlers
const handleDragStart = (event) => {
    const orderId = event.target.dataset.id;
    if (!orderId) return;
  
    state.dragging.source = orderId;
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
  
//help toggle handler.
const handleHelpToggle = (event) => {
    const overlay = html.help.overlay;
    overlay.open = !overlay.open;
    if(!overlay.open){
        html.other.add.focus();
    }
};
const handleAddToggle = (event) => {
    const overlay = html.add.overlay;

    overlay.open = !overlay.open;

    if (overlay.open){
        html.add.tittle.value = '';
        html.add.table.value = '';
    }else{
        html.other.add.focus();
    }
};

const handleAddSubmit = (event) => {
    event.preventDefault(); 

    const title = html.add.title.value;
    const table = html.add.table.value;

    const newOrder = createOrderData({ title, table, column: 'ordered' });
    state.orders[newOrder.id] = newOrder;
    const orderElement = createOrderHtml(newOrder);
    html.columns['ordered'].appendChild(orderElement); 

    html.add.overlay.open = false; 
};

const handleEditToggle = (event) => {
    const orderId = event.target.closest('.order').dataset.id;
    const order = state.orders[orderId];
    if (!order) return;
  
    html.edit.title.value = order.title;
    html.edit.table.value = order.table;
    html.edit.column.value = order.column;
    html.edit.id.value = order.id;
  
    html.edit.overlay.open = true;
  };
  
const handleEditSubmit = (event) => {
   
        event.preventDefault();
        const id = html.edit.id.value;
        const updatedOrder = {
          title: html.edit.title.value,
          table: html.edit.table.value,
          column: html.edit.column.value,
          id,
          created: state.orders[id].created,
        };
        state.orders[id] = updatedOrder;
        moveToColumn(id, updatedOrder.column);
        html.edit.overlay.open = false;
    
};
const handleDelete = (event) => {
    const orderId = html.edit.id.value;
    delete state.orders[orderId];
    document.querySelector(`[data-id="${orderId}"]`).remove();
    html.edit.overlay.open = false;
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
}