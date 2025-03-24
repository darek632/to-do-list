export function submitComment() { 

    document.getElementById("comment-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents page reload
        let commentText = document.getElementById("task-comments").value;
        let dialogSection = document.querySelector(".main-section");
        
        if (commentText.trim() !== "") { 
            console.log("Submitted comment:", commentText); // Replace with actual functionality
            let newComment = document.createElement("p");
            newComment.textContent = commentText;

            dialogSection.appendChild(newComment);

            document.getElementById("task-comments").value = ""; // Clears the textarea
        } else {
            alert("Please enter a comment before submitting.");
        }
    });
}