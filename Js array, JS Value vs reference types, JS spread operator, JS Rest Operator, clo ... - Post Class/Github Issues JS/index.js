const pageIndicator = document.getElementById('page_indicator');
const issueContainer = document.getElementById('issue_container');
const loadPrevBtn = document.getElementById('load_prev');
const loadNextBtn = document.getElementById('load_next');
let currentPage = 1;

function fetchIssues(pageNumber) {
    currentPage = pageNumber;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
        .then(response => response.json())
        .then(data => {
            issueContainer.innerHTML = '';
            data.forEach(issue => {
                const li = document.createElement('li');
                li.innerText = issue.title;
                issueContainer.appendChild(li);
            });
            pageIndicator.innerText = `Page number ${currentPage}`;
        })
        .catch(error => console.error(error));
}

// Load the initial issues on page load
fetchIssues(currentPage);

loadNextBtn.addEventListener('click', () => {
    currentPage++;
    fetchIssues(currentPage);
});

loadPrevBtn.addEventListener('click', () => {
    if (currentPage === 1) {
        return;
    }
    currentPage--;
    fetchIssues(currentPage);
});
