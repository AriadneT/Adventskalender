<?php
/**
 * @return string $output
 */
function showPage()
{
	$replacements = [];
	$today = getdate();
	
	if ($today['month'] != 'December') {
		$replacements['#message#'] = 
			'Sorry, this advent calendar is only available in December.';
	} else {
		$replacements['#message#'] = 
			'Sorry, this advent calendar is not yet ready? It will be available in 2018.';
	}
	$HTML = 
		file_get_contents('../Adventskalender/Resources/Private/Templates/Main.html');
		
	// Find all words to be replaced. These have '#' before and after the word(s).
    $splitHTMLContent = preg_split('/[<>]/', $HTML);
    $toReplace = [];
    foreach ($splitHTMLContent as $subset) {
        if (preg_match('/#[a-z]+#/', $subset)) {
            $toReplace[] = $subset;
        }
    }
	
	// Replace words to be replaced with labels and results from $replacements
    foreach ($replacements as $key => $value) {
        foreach ($toReplace as $entry) {
            if (preg_match('/' . $entry . '/', $key)) {
                $HTML = str_replace($entry, $value, $HTML);
                break;
            }
        }
    }
	
	return $HTML;
}
