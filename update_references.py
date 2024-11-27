from github import Github

# Configurar el token de GitHub desde los secretos
import os
token = os.getenv("GITHUB_TOKEN")
repo_name = "MarcosGiannini/MarcosGiannini.github.io"
file_path = "references.md"

# Conectar al repositorio
g = Github(token)
repo = g.get_repo(repo_name)

# Obtener contenido del archivo actual
file_content = repo.get_contents(file_path)
new_content = file_content.decoded_content.decode() + "\n\n# Test update\nThis is a test update from GitHub Actions."
repo.update_file(file_path, "Automated update to references.md", new_content, file_content.sha)
print("File updated successfully!")
