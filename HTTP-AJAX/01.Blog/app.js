function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/blog";
    const postsUrl = `${baseUrl}/posts`;
    const commentsUrl = `${baseUrl}/comments`;

    const loadButtonElement = document.getElementById("btnLoadPosts");
    const selectPostElement = document.getElementById("posts");
    const viewPostButtonElement = document.getElementById("btnViewPost");
    const postBodyElement = document.getElementById("post-body");
    const postCommentsElement = document.getElementById("post-comments");

    async function customFetch(url){ 
        return fetch(url)
            .then((response) => response.json());
    }

    function appendPosts(postResponse) {
        Object.values(postResponse).forEach(({ body, id, title }) => {
            const optionElement = document.createElement("option");

            optionElement.textContent = title;
            optionElement.value = id;

            selectPostElement.appendChild(optionElement);
        });
    }

    function fetchAllPosts() {
        customFetch(postsUrl)
            .then(appendPosts);
    }

    function fetchSinglePost() {
        const { value: selectedPostId } = selectPostElement;

        if (!selectedPostId) {
            return;
        }

     }
    loadButtonElement.addEventListener("click", fetchAllPosts);
    viewPostButtonElement.addEventListener("click", fetchSinglePost);

}

attachEvents();
