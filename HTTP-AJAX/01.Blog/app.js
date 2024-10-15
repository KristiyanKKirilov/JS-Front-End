function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/blog";
    const postsUrl = `${baseUrl}/posts`;
    const commentsUrl = `${baseUrl}/comments`;

    const loadButtonElement = document.getElementById("btnLoadPosts");
    const selectPostElement = document.getElementById("posts");
    const viewPostButtonElement = document.getElementById("btnViewPost");
    const postBodyElement = document.getElementById("post-body");
    const postTitleElement = document.getElementById("post-title");
    const postCommentsElement = document.getElementById("post-comments");

    async function customFetch(url) {
        return fetch(url)
            .then((response) => response.json());
    }

    function appendPosts(postResponse) {
        selectPostElement.textContent = "";

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

        customFetch(`${postsUrl}/${selectedPostId}`)
            .then(({ body, title }) => {
                postBodyElement.textContent = body;
                postTitleElement.textContent = title;

                return customFetch(commentsUrl);
            })
            .then((commentsReponse) => {
                postCommentsElement.textContent = "";

                Object.values(commentsReponse)
                    .filter(({ postId }) => postId === selectedPostId)
                    .forEach(({ id, text }) => {
                        const liElement = document.createElement("li");

                        liElement.textContent = text;
                        liElement.setAttribute('data-id', id);

                        postCommentsElement.appendChild(liElement);
                    });
            });
    }
    
    loadButtonElement.addEventListener("click", fetchAllPosts);
    viewPostButtonElement.addEventListener("click", fetchSinglePost);

}

attachEvents();
