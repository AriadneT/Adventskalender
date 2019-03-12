<?php
/**
 * @return string $output
 */
function showPage()
{
	// Set up configuration and other data required for advent calendar website
    $configurations = include('../Adventskalender/Configuration/Config.php');
	$replacements = [];
	$today = getdate();
	
	if ($today['month'] != 'December') {
		$replacements['#message#'] = 
			'Sorry, this calendar is only available in December. Enjoy these pictures in the meantime.';
		for ($day = 1; $day < 26; $day++) {
			$replacements['#' . $day . '#'] = 
                $configurations['closedWindows'][$day];
		} 
	} else {
		$replacements['#message#'] = '';
			
		for ($day = 1; $day < 26; $day++) {
			// mday is day in month
			if ($day <= $today['mday']) {
				$replacements['#' . $day . '#'] = 
                    $configurations['icons'][$day];
			} else {
				$replacements['#' . $day . '#'] = 
                    $configurations['closedWindows'][$day];
			}
		}
	}
	
	$HTML = 
		file_get_contents('../Adventskalender/Resources/Private/Templates/Main.html');
		
	// Find all words to be replaced. These have '#' before and after the word.
    $splitHTMLContent = preg_split('/[<">]/', $HTML);
    $toReplace = [];
    foreach ($splitHTMLContent as $subset) {
        if (preg_match('/#[a-z0-9]+#/', $subset)) {
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
