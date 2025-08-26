class HomePage {
    // URL of Flipkart
    open = async () => {
        await browser.url('https://www.flipkart.com');
    };

    // Search input
    get searchInput() {
        return $('input[name="q"]'); // adjust selector if needed
    }

    // Suggestions dropdown
    get suggestionList() {
        return $$('ul>li'); // adjust selector according to Flipkart DOM
    }

    // Enter text in search
    searchLaptop = async (text: string) => {
        const input = await this.searchInput;
        await input.setValue(text);
    };

    // Select a suggestion
    selectSuggestion = async (suggestionText: string) => {
        const suggestions = await this.suggestionList;
        for (const s of suggestions) {
            const text = await s.getText();
            if (text.toLowerCase().includes(suggestionText.toLowerCase())) {
                await s.click();
                break;
            }
        }
    };
}

export default new HomePage();
