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
			'Sorry, this advent calendar is only available in December.';
		for ($day = 1; $day < 26; $day++) {
			if (isset($configurations['closedWindows'][$day])) {
				$replacements['#' . $day . '#'] = $configurations['closedWindows'][$day];
			}
		}
	} else {
		$replacements['#message#'] = 
			'Sorry, this advent calendar is not yet ready. It will be available in 2018.';
			
		for ($day = 1; $day < 26; $day++) {
			// mday is day in month
			if ($day <= $today['mday']) {
				if (isset($configurations['icons'][$day])) {
					$replacements['#' . $day . '#'] = $configurations['icons'][$day];
				}
			} else {
				if (isset($configurations['closedWindows'][$day])) {
					$replacements['#' . $day . '#'] = $configurations['closedWindows'][$day];
				}
			}
		}
	}
	
	$HTML = 
		file_get_contents('../Adventskalender/Resources/Private/Templates/Main.html');
		
	// Find all words to be replaced. These have '#' before and after the word(s).
    $splitHTMLContent = preg_split('/[<">]/', $HTML);
    $toReplace = [];
    foreach ($splitHTMLContent as $subset) {
        if (preg_match('/#[a-z1-9]+#/', $subset)) {
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
