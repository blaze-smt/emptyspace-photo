<?php
// return [
//     'debug'  => true
// ];

return [
    'debug'  => false,
    'cache' => [
        'pages' => [
            'active' => true,
            'ignore' => function ($page) {
                return in_array($page->id(), ['sitemap', 'feed']);
            }
        ]
    ],
    'panel' =>[
        'install' => true
    ]
];
?>