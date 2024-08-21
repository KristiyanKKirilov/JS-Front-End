function extract(content) {
    const regex = /\(([^()]+)\)/g;
    const contentElement = document.getElementById(content);
    const matchAllParentheses = contentElement.textContent.matchAll(regex);
    const result = Array.from(matchAllParentheses).map(match => match[1]).join('; ');
   return result;
}
