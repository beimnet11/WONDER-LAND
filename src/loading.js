export const showLoading = () => {
  const userInterface = document.getElementById('user-interface');
  
  if (userInterface) { // Add this check to avoid null errors
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading';
    loadingDiv.innerHTML = `
    <h2>Loading...</h2>
    `;
    userInterface.appendChild(loadingDiv);
  } else {
    console.error("Element with id 'user-interface' not found.");
  }
};

export const hideLoading = () => {
  const loadingDiv = document.getElementById('loading');
  if (loadingDiv) {
    loadingDiv.remove();
  }
};



