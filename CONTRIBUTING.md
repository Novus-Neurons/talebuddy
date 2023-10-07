# Contributing to Tale Buddy - Your Community Storytelling Platform

Thank you for considering contributing to Tale Buddy! Your contributions are essential in building a diverse and engaging collection of stories and tales for our community. To ensure a smooth and collaborative experience, please follow these guidelines when contributing to the project.

## Contribution Guidelines

### Adding Stories or Tales

1. **Maintain Originality:** Please ensure that the content you contribute is original and not plagiarized. We encourage creativity and respect for intellectual property.

2. **Avoid Merge Conflicts:** Before starting your work, pull the latest changes from the main repository (`origin/main`) to avoid merge conflicts.

3. **Create a New JSON File:** To add your story or tale, create a new JSON file in the `/stories` folder with the name `<your_story_title>.json`. Use the sample structure provided below.

### Steps to Create a New Story/Tale JSON File

Follow these steps to create and contribute a new JSON file for your story or tale:

1. **Fork the Repository:** Click on the "Fork" button at the top right corner of the Tale Buddy repository to create a copy in your own GitHub account.

2. **Clone Your Forked Repository:** Clone your forked repository to your local machine using the following command. Replace `your-username` with your GitHub username.

   ```bash
   git clone https://github.com/your-username/talebuddy.git
   ```

3. **Create a New Branch:** Create a new branch for your contribution. Be sure to choose a branch name that describes your changes.

   ```bash
   git checkout -b feature/your-story-or-tale
   ```

4. **Add Your JSON File:** Create a new JSON file in the `/stories` folder with the name `<your_story_title>.json`. Use the sample structure provided below.

5. **Commit Your Changes:** Commit your changes with clear and descriptive commit messages.

   ```bash
   git commit -m "Add story: <your_story_title>"
   ```

6. **Push Your Changes:** Push your branch to your forked repository on GitHub.

   ```bash
   git push origin feature/your-story-or-tale
   ```

7. **Create a Pull Request (PR):** Finally, create a pull request from your branch to the main Tale Buddy repository. Be sure to include a clear description of your changes in the PR.

### JSON File Structure (Use for Your Story/Tale)

```json
{
    "title": "story title",
    "number_of_pages": 0,
    "pages": [
        {
            "page_title": "page title",
            "page_content": [
                "paragraph1",
                "paragraph2",
                "paragraph2"
            ]
        }
        // add more pages
    ],
    "credits": {
        "name": "url"
    }
}
```

### Website Development Contribution

If you wish to contribute to the website's development, you can refer to the designs provided in the `/designs` folder. Make improvements to the user interface and user experience while following best practices for web development.

make sure that the data from json is properly displayed after the changes.

Do not change the structure of the json objects.

[figma](https://www.figma.com/file/Ytjhr2hushiuM5ZblRWjrz/NN_Hacktober?type=design&node-id=0%3A1&mode=design&t=svBHSaUF1Zl1HTGw-1)

## Code Style Guidelines

Please maintain clean and well-documented code for website development. Ensure that your contributions align with the project's coding standards and best practices.

Thank you for contributing to Tale Buddy, and happy storytelling!
