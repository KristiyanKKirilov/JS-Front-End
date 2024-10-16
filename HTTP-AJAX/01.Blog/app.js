function attachEvents() {
    let allPosts = [];
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
        allPosts = [];
        
        Object.values(postResponse).forEach(({ body, id, title }) => {
            const optionElement = document.createElement("option");

            optionElement.textContent = title;
            optionElement.value = id;
            
            selectPostElement.appendChild(optionElement);
            allPosts.push({body, id, title});
        });
    }

    function fetchAllPosts() {
        customFetch(postsUrl)
            .then(appendPosts);
    }

    function fetchSinglePost() {
        const { value: selectedPostId } = selectPostElement;

        postTitleElement.textContent = "";
        postBodyElement.textContent = "";

        if (!selectedPostId) {
            return;
        }

        const selectedPost = allPosts.find((x) => x.id === selectedPostId);

        postTitleElement.textContent = selectedPost.title;
        postBodyElement.textContent = selectedPost.body;

        customFetch(commentsUrl)
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
