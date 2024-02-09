
// Get all labels and contents
  const labels = document.querySelectorAll('.accordion label');
  const contents = document.querySelectorAll('.accordion .content');

  // Add click event listener to each label using a for loop
  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', () => {
      // Toggle the display property of corresponding content
      if (contents[i].style.display === 'none') {
        // Hide all contents
        contents.forEach(content => content.style.display = 'none');
        // Show the clicked content
        contents[i].style.display = 'block';
      } else {
        // Hide the clicked content
        contents[i].style.display = 'none';
      }
    });
  }