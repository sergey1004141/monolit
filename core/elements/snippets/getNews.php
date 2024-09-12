<?php

/**
 * @var $modx xPDO
 * @var $id int
 * @var $content_strlen int
 */

$docs = $modx->getCollection('modResource', array('parent' => $id, 'published' => 1));

// Перебираем документы
foreach ($docs as $doc) {
    $properties = array(
        'id' => $doc->id,
        'pagetitle' => $doc->pagetitle,
        'content' => mb_strlen($doc->content) > (int)$content_strlen ? mb_substr($doc->content, 0, (int)$content_strlen, 'UTF-8') . "..." : $doc->content,
        'preview' => $doc->getTVValue('preview_image'),
        'publishedon' => date('Y-m-d H:m:s', $doc->publishedon)
    );
    echo $modx->getChunk('news_new_elem', $properties);
}
