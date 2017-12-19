<?php
/**
 * @return string $output
 */
function showPage()
{
	$HTML = file_get_contents('../Adventskalender/Resources/Private/Templates/Main.html');
	
	return $HTML;
}
