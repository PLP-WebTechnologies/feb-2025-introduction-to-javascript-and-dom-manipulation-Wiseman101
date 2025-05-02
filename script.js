
document.getElementById('changeBtn').addEventListener('click', () => {
    const desc = document.getElementById('description');
    desc.textContent = "You've changed the content!";
    desc.style.color = "crimson";
    desc.style.fontWeight = "bold";
    desc.style.backgroundColor = "#e0e0e0";
  });
  
  // New box
  document.getElementById('addBtn').addEventListener('click', () => {
    const box = document.createElement('div');
    box.className = 'box';
    document.getElementById('box-container').appendChild(box);
  });
  
  // Remove the last box
  document.getElementById('removeBtn').addEventListener('click', () => {
    const container = document.getElementById('box-container');
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  });
  
