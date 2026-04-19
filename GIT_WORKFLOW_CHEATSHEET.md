# 🚀 Git & GitHub Senior Workflow Cheat Sheet
*Generated from our Moodify Mentorship Session*

## 1. Starting a New Feature
Never work directly on `main`. Always create a safe, isolated environment.
```bash
# Check your current status
git status

# Create and switch to a new feature branch
git switch -c feature/your-feature-name
```

## 2. Saving Your Work (Staging & Committing)
Git sees your changes, but you have to explicitly tell it what to save in history.
```bash
# See what files you've changed
git status

# Stage all your changed files (move them to the waiting room)
git add .

# Take a permanent snapshot with a message
git commit -m "feat: description of what I did"

# Look at your beautiful commit history
git log --oneline
```

## 3. Pushing to GitHub (For Pull Requests)
When you are ready to share your work or create a Pull Request.
```bash
# Push your branch to GitHub (and set the upstream link)
# The -u means next time you only have to type `git push`
git push -u origin feature/your-feature-name
```

## 4. Syncing Your Local Computer
When a feature is merged on GitHub, you need to download it so your local `main` is up-to-date.
```bash
# Go back to your main branch
git switch main

# Download the latest codebase from GitHub
git pull origin main
```

## 5. Handling Merge Conflicts 💥
When two people edit the exact same line, Git will throw a conflict and ask you to fix it.
```bash
# 1. You try to merge or pull...
git merge main 
# => CONFLICT (content): Merge conflict in...

# 2. Don't panic! Open the conflicting file in your Editor (VS Code).
# 3. Find the weird arrows (<<<<<<<  ======= >>>>>>>).
# 4. Delete the version of the code you don't want, and keep the one you want cleanly.
# 5. Tell Git you fixed it:
git add .
git commit -m "fix: resolve merge conflict"
```

## Pro-Tips for Conventional Commits
- `feat: ` Use when adding a brand new feature
- `fix: ` Use when fixing a bug
- `chore: ` Use for maintenance (like updating README or formatting)
- `style: ` Use for CSS or cosmetic changes only
