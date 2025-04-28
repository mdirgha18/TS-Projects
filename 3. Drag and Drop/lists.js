var list = document.querySelector('.list');
var dragging = null;
if (list) {
    list.addEventListener('dragstart', function (e) {
        var target = e.target;
        if (target && target.classList.contains('item')) {
            dragging = target;
            target.classList.add('dragging');
        }
    });
    list.addEventListener('dragend', function () {
        if (dragging) {
            dragging.classList.remove('dragging');
        }
        document.querySelectorAll('.item').forEach(function (item) { return item.classList.remove('over'); });
        dragging = null;
    });
    list.addEventListener('dragover', function (e) {
        e.preventDefault();
        var afterElement = getDragAfterElement(list, e.clientY);
        document.querySelectorAll('.item').forEach(function (item) { return item.classList.remove('over'); });
        if (afterElement && dragging) {
            afterElement.classList.add('over');
            list.insertBefore(dragging, afterElement);
        }
        else if (dragging) {
            list.appendChild(dragging);
        }
    });
}
function getDragAfterElement(container, y) {
    var items = Array.prototype.slice.call(container.querySelectorAll('.item:not(.dragging)'));
    return items.reduce(function (closest, child) {
        var box = child.getBoundingClientRect();
        var offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        }
        return closest;
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
}
