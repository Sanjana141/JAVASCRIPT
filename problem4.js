function moveEmptyBoxes(boxes) {
    let nonEmpty = [];
    let emptyCount = 0;
    boxes.forEach(box => {
        if (box === 0) {
            emptyCount++; 
        } else {
            nonEmpty.push(box); 
        }
    });
    for (let i = 0; i < emptyCount; i++) {
        nonEmpty.push(0);
    }

    return { updatedBoxes: nonEmpty, emptyCount: emptyCount };
}
document.getElementById('moveButton').addEventListener('click', function() {
    const input = document.getElementById('boxesInput').value;
    const boxes = input.split(',').map(Number); 
    const result = moveEmptyBoxes(boxes);

  
    document.getElementById('result').innerText = `Updated Boxes: ${result.updatedBoxes}`;
    document.getElementById('count').innerText = `Count of empty boxes: ${result.emptyCount}`;
});
