function switchOrder(arr, id, newOrder) {
    const newArr = arr.map(item => ({ ...item }));

    const itemToMove = newArr.find(item => item.id === id);
    if (!itemToMove) return newArr;

    const oldOrder = itemToMove.order;  //vị trí cũ của item cần đổi vị trí
    
    const maxOrder = newArr.length - 1;
    if (newOrder < 0) newOrder = 0;
    if (newOrder > maxOrder) newOrder = maxOrder;

    if (oldOrder === newOrder) return newArr;

    if (newOrder < oldOrder) {  //các obj nằm giữa vị trí cũ và vị trí mới sẽ tăng order lên 1
        newArr.forEach(item => {
            if (item.order >= newOrder && item.order < oldOrder) {
                item.order++;
            }
        });
    } else {
        newArr.forEach(item => {  //các obj nằm giữa vị trí cũ và vị trí mới sẽ giảm order xuống 1
            if (item.order > oldOrder && item.order <= newOrder) {
                item.order--;
            }
        });
    }

    itemToMove.order = newOrder;  //gán oder mới cho object cần chuyển

    newArr.sort((a, b) => a.order - b.order);

    return newArr;
}

module.exports = switchOrder;