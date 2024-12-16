document.addEventListener('mouseup', function(event) {
    if (event.button === 1) { // Middle mouse button
        console.log('Program started');
        try {
            // Select all span tags with the specific class
            const allSpans = document.querySelectorAll('span.lsf-richtext__line');
            console.log('Total span elements found:', allSpans.length);

            // Define the phrases to look for
            const phrases = ['prime try before you buy', 'color'];
            const ignorePhrases = ['ignore'];

            // Filter to find spans with specific texts
            const targetSpans = Array.from(allSpans).filter(span => {
                const text = span.textContent.trim().toLowerCase();
                return phrases.includes(text);
            });

            const targetSpansIgnore = Array.from(allSpans).filter(span => {
                const text = span.textContent.trim().toLowerCase();
                return ignorePhrases.includes(text);
            });

            // Process each target span found
            targetSpans.forEach(span => {
                console.log('Found target span:', span);

                // Find the closest common ancestor that contains Yes buttons
                let parentElement = span;
                while (parentElement && parentElement.querySelectorAll('span').length < 3) {
                    parentElement = parentElement.parentElement;
                }

                if (!parentElement) {
                    console.log('No enclosing section found for span:', span);
                    return;
                }

                // Select all span tags within the same parent container
                const spanTags = parentElement.querySelectorAll('span');
                let yesButtons = [];
                spanTags.forEach(spanTag => {
                    // Check if the text content indicates "Yes"
                    const buttonText = spanTag.textContent.trim().toLowerCase();
                    if (buttonText === 'yes' || buttonText.includes('yes')) {
                        yesButtons.push(spanTag);
                    }
                });

                console.log('Yes buttons found:', yesButtons.length);

                if (yesButtons.length < 12) {
                    console.log('Not enough Yes buttons found.');
                } else {
                    for (let i = 0; i < 12 && i < yesButtons.length; i++) {
                        let radioButton = yesButtons[i].closest('label').querySelector('input[type="radio"]');
                        if (radioButton) {
                            radioButton.click();
                        }
                    }
                }
            });

            // Process each target span to ignore
            targetSpansIgnore.forEach(span => {
                console.log('Found target span:', span);

                // Find the closest common ancestor that contains Ignore buttons
                let parentElement = span;
                while (parentElement && parentElement.querySelectorAll('span').length < 3) {
                    parentElement = parentElement.parentElement;
                }

                if (!parentElement) {
                    console.log('No enclosing section found for span:', span);
                    return;
                }

                // Select all span tags within the same parent container
                const spanTagsIgnore = parentElement.querySelectorAll('span');
                let IgnoreButtons = [];
                spanTagsIgnore.forEach(spanTag => {
                    // Check if the text content indicates "Unjudgeable"
                    const buttonText = spanTag.textContent.trim().toLowerCase();
                    if (buttonText === 'unjudgeable' || buttonText.includes('unjudgeable')) {
                        IgnoreButtons.push(spanTag);
                    }
                });

                console.log('Unjudgeable buttons found:', IgnoreButtons.length);

                if (IgnoreButtons.length === 8 || IgnoreButtons.length === 6) {
                    const loopCount = IgnoreButtons.length; // 8 or 6
                    for (let i = 0; i < loopCount && i < IgnoreButtons.length; i++) {
                        let radioButton = IgnoreButtons[i].closest('label').querySelector('input[type="radio"]');
                        if (radioButton) {
                            radioButton.click();
                        }
                    }
                } else {
                    console.log('Not enough Unjudgeable buttons found.');
                }
            });

            console.log('Program ended successfully');
        } catch (error) {
            console.error('Program ended with an error:', error);
        }
    }
});
