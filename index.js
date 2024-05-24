const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
         <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Naruto Fan Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to the Naruto Fan Page</h1>
        <nav>
            <ul>
                <li><a href="#about">About Naruto</a></li>
                <li><a href="#characters">Characters</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Naruto</h2>
        <p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
    </section>

    <section id="characters">
        <h2>Main Characters</h2>
        <div class="character" id="naruto">
            <img src="naruto.jpg" alt="Naruto Uzumaki">
            <h3>Naruto Uzumaki</h3>
            <p>Naruto Uzumaki is the protagonist of the series. He is a ninja from the Hidden Leaf Village and is known for his cheerful and boisterous personality.</p>
        </div>
        <div class="character" id="sasuke">
            <img src="sasuke.jpg" alt="Sasuke Uchiha">
            <h3>Sasuke Uchiha</h3>
            <p>Sasuke Uchiha is one of Naruto's closest friends and rivals. He hails from the Uchiha clan and is determined to become strong to avenge his clan.</p>
        </div>
        <div class="character" id="sakura">
            <img src="sakura.jpg" alt="Sakura Haruno">
            <h3>Sakura Haruno</h3>
            <p>Sakura Haruno is a member of Team 7 alongside Naruto and Sasuke. She is known for her intelligence and strong will.</p>
        </div>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 Naruto Fan Page</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
