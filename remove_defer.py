import os

docs_dir = "/Users/yuichiyazaki/Documents/GitHubRepository/Prj_DatavizJP/_app_fork/jsoncrack.com/docs"

for root, dirs, files in os.walk(docs_dir):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content.replace('<script src="/supabase.js" defer=""></script>', '<script src="/supabase.js"></script>')
            new_content = new_content.replace('<script src="/dataviz-auth-client.js" defer=""></script>', '<script src="/dataviz-auth-client.js"></script>')
            
            # Also try without empty string assignment just in case
            new_content = new_content.replace('<script src="/supabase.js" defer></script>', '<script src="/supabase.js"></script>')
            new_content = new_content.replace('<script src="/dataviz-auth-client.js" defer></script>', '<script src="/dataviz-auth-client.js"></script>')

            if content != new_content:
                print(f"Modifying {filepath}")
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
