# prashantshukla-qa.github.io

## Build instructions

### Tech Stack

- [Jekyll](https://jekyllrb.com/) — Static site generator
- [Gulp](https://gulpjs.com/) — Task runner
- [Sass](https://sass-lang.com/) — CSS preprocessor
- [Pug](https://pugjs.org/) — HTML template engine
- [BrowserSync](https://browsersync.io/) — Live reloading dev server

### Prerequisites

Make sure you have the following installed on your machine:

| Tool | Version | Check with |
|------|---------|------------|
| **Ruby** | 2.7+ | `ruby -v` |
| **Jekyll** | 4.x | `jekyll -v` |
| **Node.js** | 16+ | `node -v` |
| **npm** | 8+ | `npm -v` |

#### Installing prerequisites

**Ruby & Jekyll (if not already installed):**

```bash
# Install Ruby (Ubuntu/Debian)
sudo apt install ruby-full build-essential

# Install Jekyll and Bundler
gem install jekyll bundler
```

**Node.js (if not already installed):**

```bash
# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
```

### Hosting locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/prashantshukla-qa/prashantshukla-qa.github.io.git
   cd prashantshukla-qa.github.io
   ```

2. **Install Node dependencies**

   ```bash
   npm install
   ```

3. **Install Gulp CLI globally** (if not already installed)

   ```bash
   npm install -g gulp-cli
   ```

4. **Run the development server**

   ```bash
   gulp
   ```

   This will:
   - Compile Sass files
   - Build the Jekyll site
   - Launch a BrowserSync server with live reload
   - Watch for file changes and auto-rebuild

5. **Open in your browser**

   BrowserSync will automatically open the site. If it doesn't, navigate to:

   ```
   http://localhost:3000
   ```

### Available Gulp tasks

| Command | Description |
|---------|-------------|
| `gulp` | Run the full dev server (build + watch + live reload) |
| `gulp sass` | Compile Sass to CSS |
| `gulp jekyll-build` | Build the Jekyll site |
| `gulp pug` | Compile Pug templates to HTML in `_includes/` |

### Troubleshooting

- **`jekyll` command not found** — Make sure Jekyll is installed (`gem install jekyll`) and your Ruby `bin` directory is on your `PATH`.
- **Node/npm errors** — Delete `node_modules/` and run `npm install` again.
- **Port 3000 already in use** — Stop any other service on that port, or BrowserSync will auto-pick the next available port.
