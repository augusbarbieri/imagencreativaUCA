from playwright.sync_api import sync_playwright

def verify_header():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8000/main.html")
        page.screenshot(path="verification.png")
        browser.close()

if __name__ == "__main__":
    verify_header()
