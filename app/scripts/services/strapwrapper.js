'use strict';

angular.module('flatApp')
  .service('strapWrapper', function strapWrapper($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

        var straps =
        {
            models: [
                {
                    id: 'AITG500',
                    title: 'Ultra-Thin Alligator',
										desc: '1st Grade CITES-Certified American alligator, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '169.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: 'Black',
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
																				},
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				},
                                        {
                                            id: '20MR',
                                            no: '20'
																				}
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'cognac',
                            name: 'Cognac',
                            no: '14',
                            rgb:'rgb(162,87,33)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
																				},
                                        {
                                            id: '17MR',
                                            no: '17'
																				},
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'AITG500S',
                    title: 'Special Taper Ultra-Thin Alligator',
										desc: '1st Grade CITES-Certified American alligator, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '199.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: "Black",
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'cognac',
                            name: 'Cognac',
                            no: '14',
                            rgb:'rgb(162,87,33)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'AITPD400',
                    title: 'Dress Padded Alligator',
										desc: '1st Grade CITES-Certified American alligator, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '169.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: 'Black',
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				},
                                        {
                                            id: '20MR',
                                            no: '20'
																				},
                                        {
                                            id: '22MR',
                                            no: '22'
																				}
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
																				},
                                        {
                                            id: '20ML',
                                            no: '20'
																				}
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: 'Brown',
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
																				},
                                        {
                                            id: '17MR',
                                            no: '17'
																				},
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				},
                                        {
                                            id: '20MR',
                                            no: '20'
																				}
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
																				},
                                        {
                                            id: '20ML',
                                            no: '20'
																				}
                                    ]

                                }
                            ]
                        },
                        {
                            id: 'cognac',
                            name: 'Cognac',
                            no: '14',
                            rgb:'rgb(162,87,33)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
																				},
                                        {
                                            id: '17MR',
                                            no: '17'
																				},
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				},
                                        {
                                            id: '20MR',
                                            no: '20'
																				}
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
																				},
                                        {
                                            id: '20ML',
                                            no: '20'
																				}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'AITPD400S',
                    title: 'Special Taper Padded Alligator',
										desc: '1st Grade CITES-Certified American alligator, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '199.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: 'Black',
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				}
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'cognac',
                            name: 'Cognac',
                            no: '14',
                            rgb:'rgb(162,87,33)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'AITPD600',
                    title: 'Dress Padded Matte Alligator',
										desc: '1st Grade CITES-Certified American alligator, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '169.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: 'Black',
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
																				},
                                        {
                                            id: '17MR',
                                            no: '17'
																				},
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				},
                                        {
                                            id: '20MR',
                                            no: '20'
																				},
                                        {
                                            id: '22MR',
                                            no: '22'
																				}
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
																				},
                                        {
                                            id: '20ML',
                                            no: '20'
																				}
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: 'Brown',
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
																				},
                                        {
                                            id: '17MR',
                                            no: '17'
																				},
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				},
                                        {
                                            id: '20MR',
                                            no: '20'
																				},
                                        {
                                            id: '22MR',
                                            no: '22'
																				}
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
																				},
                                        {
                                            id: '20ML',
                                            no: '20'
																				}
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'honey',
                            name: 'Honey',
                            no: '04',
                            rgb:'rgb(167,114,29)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '20MR',
                                            no: '20'
																				}
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'cognac',
                            name: 'Cognac',
                            no: '14',
                            rgb:'rgb(162,87,33)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
																				},
                                        {
                                            id: '17MR',
                                            no: '17'
																				},
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				},
                                        {
                                            id: '20MR',
                                            no: '20'
																				}
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
																				},
                                        {
                                            id: '20ML',
                                            no: '20'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'AITPD600S',
                    title: 'Special Taper Padded Matte Alligator',
										desc: '1st Grade CITES-Certified American alligator, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '199.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: 'Black',
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				}
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'cognac',
                            name: 'Cognac',
                            no: '14',
                            rgb:'rgb(162,87,33)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
																				},
                                        {
                                            id: '19MR',
                                            no: '19'
																				}
                                    ]

                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'CITG500',
                    title: 'Ultra-Thin Crocodile',
										desc: '1st Grade CITES-Certified caiman crocodile, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '79.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: 'Black',
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '16ML',
                                            no: '16'
                                        },
                                        {
                                            id: '17ML',
                                            no: '17'
                                        },
                                        {
                                            id: '18ML',
                                            no: '18'
                                        },
                                        {
                                            id: '19ML',
                                            no: '19'
                                        },
                                        {
                                            id: '20ML',
                                            no: '20'
                                        }
                                    ]
                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '10LR',
                                            no: '10'
                                        },
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: 'Brown',
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '16ML',
                                            no: '16'
                                        },
                                        {
                                            id: '17ML',
                                            no: '17'
                                        },
                                        {
                                            id: '18ML',
                                            no: '18'
                                        },
                                        {
                                            id: '19ML',
                                            no: '19'
                                        },
                                        {
                                            id: '20ML',
                                            no: '20'
                                        }
                                    ]
                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '10LR',
                                            no: '10'
                                        },
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'tan',
                            name: 'Tan',
                            no: '03',
                            rgb:'rgb(140,64,43)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
                                        },
                                        {
                                            id: '20ML',
                                            no: '20'
                                        }
                                    ]

                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'CITPD400',
                    title: 'Dress Padded Crocodile',
										desc: '1st Grade CITES-Certified caiman crocodile, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '89.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'white',
                            name: 'White',
                            no: '00',
                            rgb:'rgb(255,250,240)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'black',
                            name: 'Black',
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '15MR',
                                            no: '15'
                                        },
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        },
                                        {
                                            id: '24MR',
                                            no: '24'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '16ML',
                                            no: '16'
                                        },
                                        {
                                            id: '17ML',
                                            no: '17'
                                        },
                                        {
                                            id: '18ML',
                                            no: '18'
                                        },
                                        {
                                            id: '19ML',
                                            no: '19'
                                        },
                                        {
                                            id: '20ML',
                                            no: '20'
                                        },
                                        {
                                            id: '22ML',
                                            no: '22'
                                        }
                                    ]
                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '08LR',
                                            no: '08'
                                        },
                                        {
                                            id: '10LR',
                                            no: '10'
                                        },
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '13LR',
                                            no: '13'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '10LL',
                                            no: '10'
                                        },
                                        {
                                            id: '12LL',
                                            no: '12'
                                        },
                                        {
                                            id: '14LL',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: 'Brown',
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        },
                                        {
                                            id: '24MR',
                                            no: '24'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '16ML',
                                            no: '16'
                                        },
                                        {
                                            id: '17ML',
                                            no: '17'
                                        },
                                        {
                                            id: '18ML',
                                            no: '18'
                                        },
                                        {
                                            id: '19ML',
                                            no: '19'
                                        },
                                        {
                                            id: '20ML',
                                            no: '20'
                                        },
                                        {
                                            id: '22ML',
                                            no: '22'
                                        }
                                    ]
                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '10LR',
                                            no: '10'
                                        },
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '13LR',
                                            no: '13'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '10LL',
                                            no: '10'
                                        },
                                        {
                                            id: '12LL',
                                            no: '12'
                                        },
                                        {
                                            id: '14LL',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'tan',
                            name: 'Tan',
                            no: '03',
                            rgb:'rgb(140,64,43)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        },
                                        {
                                            id: '24MR',
                                            no: '24'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '16ML',
                                            no: '18'
                                        },
                                        {
                                            id: '18ML',
                                            no: '18'
                                        },
                                        {
                                            id: '20ML',
                                            no: '20'
                                        }
                                    ]

                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '13LR',
                                            no: '13'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'CITQR100',
                    title: "Women's Padded Crocodile",
										desc: '1st Grade CITES-Certified caiman crocodile, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '99.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'white',
                            name: 'White',
                            no: '00',
                            rgb:'rgb(255,250,240)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'black',
                            name: 'Black',
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: 'Brown',
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'tan',
                            name: 'Tan',
                            no: '03',
                            rgb:'rgb(140,64,43)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'navy',
                            name: 'Navy',
                            no: '08',
                            rgb:'rgb(29,53,88)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'bordeaux',
                            name: 'Bordeaux',
                            no: '09',
                            rgb:'rgb(99,40,47)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'orange',
                            name: 'Orange',
                            no: '11',
                            rgb:'rgb(255,141,0)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'yellow',
                            name: 'Yellow',
                            no: '12',
                            rgb:'rgb(243,228,58)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'electric-blue',
                            name: 'Electric Blue',
                            no: '16',
                            rgb:'rgb(52,72,159)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'apple-green',
                            name: 'Apple Green',
                            no: '17',
                            rgb:'rgb(192,222,124)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'emerald',
                            name: 'Emerald',
                            no: '21',
                            rgb:'rgb(62,123,108)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'pink',
                            name: 'Pink',
                            no: '22',
                            rgb:'rgb(225,164,178)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'fuchsia',
                            name: 'Fuchsia',
                            no: '24',
                            rgb:'rgb(216,120,140)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'violet',
                            name: 'Violet',
                            no: '28',
                            rgb:'rgb(148,112,180)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'baby-blue',
                            name: 'Baby Blue',
                            no: '30',
                            rgb:'rgb(175,204,212)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'turquoise',
                            name: 'Turquoise',
                            no: '31',
                            rgb:'rgb(77,158,150)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'purple',
                            name: 'Purple',
                            no: '38',
                            rgb:'rgb(45,30,102)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'fire-red',
                            name: 'Fire Red',
                            no: '39',
                            rgb:'rgb(192,34,40)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'slate-blue',
                            name: 'Slate Blue',
                            no: '40',
                            rgb:'rgb(85,108,135)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'coral',
                            name: 'Coral',
                            no: '42',
                            rgb:'rgb(244,204,156)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'forest-green',
                            name: 'Forest Green',
                            no: '48',
                            rgb:'rgb(0,82,60)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'french-vanilla',
                            name: 'French Vanilla',
                            no: '50',
                            rgb:'rgb(240,230,166)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'key-lime',
                            name: 'Key Lime',
                            no: '51',
                            rgb:'rgb(184,205,129)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'white-pearl',
                            name: 'White Pearl',
                            no: '60',
                            rgb:'rgb(231,225,219)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'pink-pearl',
                            name: 'Pink Pearl',
                            no: '61',
                            rgb:'rgb(233,204,197)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'blue-pearl',
                            name: 'Blue Pearl',
                            no: '62',
                            rgb:'rgb(188,208,204)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'champagne',
                            name: 'Champagne',
                            no: '63',
                            rgb:'rgb(236,224,208)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'CITQR200',
                    title: "Women's Padded Matte Crocodile",
										desc: '1st Grade CITES-Certified caiman crocodile, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '99.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: 'Black',
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: 'Brown',
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'orange',
                            name: 'Orange',
                            no: '11',
                            rgb:'rgb(255,141,0)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'yellow',
                            name: 'Yellow',
                            no: '12',
                            rgb:'rgb(243,228,58)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'electric-blue',
                            name: 'Electric Blue',
                            no: '16',
                            rgb:'rgb(52,72,159)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'pink',
                            name: 'Pink',
                            no: '22',
                            rgb:'rgb(225,164,178)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'baby-blue',
                            name: 'Baby Blue',
                            no: '30',
                            rgb:'rgb(175,204,212)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'fire-red',
                            name: 'Fire Red',
                            no: '39',
                            rgb:'rgb(192,34,40)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        },
                                        {
                                            id: '16LR',
                                            no: '16'
                                        },
                                        {
                                            id: '18LR',
                                            no: '18'
                                        },
                                        {
                                            id: '20LR',
                                            no: '20'
                                        },
                                        {
                                            id: '22LR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'CITS200',
                    title: 'Sport Padded Matte Crocodile',
										desc: '1st Grade CITES-Certified caiman crocodile, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '99.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: "Black",
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '20ML',
                                            no: '20'
                                        },
                                        {
                                            id: '22ML',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: 'Brown',
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'tan',
                            name: 'Tan',
                            no: '03',
                            rgb:'rgb(140,64,43)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'green',
                            name: 'Green',
                            no: '07',
                            rgb:'rgb(0,110,75)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'blue',
                            name: 'Blue',
                            no: '27',
                            rgb:'rgb(0,67,146)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'CITSP300',
                    title: 'Sport Padded Crocodile',
										desc: '1st Grade CITES-Certified caiman crocodile, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '99.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: "Black",
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: 'Brown',
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'tan',
                            name: 'Tan',
                            no: '03',
                            rgb:'rgb(140,64,43)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'green',
                            name: 'Green',
                            no: '07',
                            rgb:'rgb(0,110,75)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'bordeaux',
                            name: 'Bordeaux',
                            no: '09',
                            rgb:'rgb(99,40,47)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'blue',
                            name: 'Blue',
                            no: '27',
                            rgb:'rgb(0,67,146)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'LZITG500',
                    title: 'Ultra-Thin Lizard',
										desc: '1st Grade CITES-Certified lizard, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '54.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: "Black",
                            no: '01',
                            rgb: 'rgb(35,29,27)',
                            image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '15MR',
                                            no: '15'
                                        },
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        }
                                    ]
                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '13LR',
                                            no: '13'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: "Brown",
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        }
                                    ]
                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '13LR',
                                            no: '13'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'tan',
                            name: 'Tan',
                            no: '03',
                            rgb:'rgb(140,64,43)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        }
                                    ]
                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '13LR',
                                            no: '13'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'LZITPD400',
                    title: 'Dress Padded Lizard',
										desc: '1st Grade CITES-Certified lizard, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '59.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: "Black",
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
                                        },
                                        {
                                            id: '20ML',
                                            no: '20'
                                        }
                                    ]
                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '13LR',
                                            no: '13'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '12LL',
                                            no: '12'
                                        },
                                        {
                                            id: '14LL',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'brown',
                            name: "Brown",
                            no: '02',
                            rgb:'rgb(77,55,45)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
                                        },
                                        {
                                            id: '20ML',
                                            no: '20'
                                        }
                                    ]
                                }
                            ],
                            women: [
                                {
                                    regulars: [
                                        {
                                            id: '12LR',
                                            no: '12'
                                        },
                                        {
                                            id: '13LR',
                                            no: '13'
                                        },
                                        {
                                            id: '14LR',
                                            no: '14'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '12LL',
                                            no: '12'
                                        },
                                        {
                                            id: '14LL',
                                            no: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'tan',
                            name: 'Tan',
                            no: '03',
                            rgb:'rgb(140,64,43)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        },
                                        {
                                            id: '22MR',
                                            no: '22'
                                        }
                                    ],
                                    longs: [
                                        {
                                            id: '18ML',
                                            no: '18'
                                        },
                                        {
                                            id: '20ML',
                                            no: '20'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'OITPD400',
                    title: 'Dress Padded Matte Ostrich',
										desc: '1st Grade CITES-Certified ostrich, hand-finished and tapered. Rembordé (turned-edge) construction.',
										msrp: '84.95',
                    url: '',
                    image:'../images/parallel-strap.png',
                    colors: [
                        {
                            id: 'black',
                            name: "Black",
                            no: '01',
                            rgb:'rgb(35,29,27)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'cognac',
                            name: 'Cognac',
                            no: '14',
                            rgb:'rgb(162,87,33)',
														image: '../images/ultra-thin-lizard-black.jpg',
                            men: [
                                {
                                    regulars: [
                                        {
                                            id: '16MR',
                                            no: '16'
                                        },
                                        {
                                            id: '17MR',
                                            no: '17'
                                        },
                                        {
                                            id: '18MR',
                                            no: '18'
                                        },
                                        {
                                            id: '19MR',
                                            no: '19'
                                        },
                                        {
                                            id: '20MR',
                                            no: '20'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            colors: [
                {id: 'white',           no: '00', rgb:'rgb(255,250,240)'},
                {id: 'black',           no: '01', rgb:'rgb(35,29,27)'},
                {id: 'brown',           no: '02', rgb:'rgb(77,55,45)'},
                {id: 'tan',             no: '03', rgb:'rgb(140,64,43)'},
                {id: 'honey',           no: '04', rgb:'rgb(167,114,29)'},
                {id: 'green',           no: '07', rgb:'rgb(0,110,75)'},
                {id: 'navy',            no: '08', rgb:'rgb(29,53,88)'},
                {id: 'bordeaux',        no: '09', rgb:'rgb(99,40,47)'},
                {id: 'orange',          no: '11', rgb:'rgb(255,141,0)'},
                {id: 'yellow',          no: '12', rgb:'rgb(243,228,58)'},
                {id: 'cognac',          no: '14', rgb:'rgb(162,87,33)'},
                {id: 'electric-blue',   no: '16', rgb:'rgb(52,72,159)'},
                {id: 'apple-green',     no: '17', rgb:'rgb(192,222,124)'},
                {id: 'emerald',         no: '21', rgb:'rgb(62,123,108)'},
                {id: 'pink',            no: '22', rgb:'rgb(225,164,178)'},
                {id: 'fuchsia',         no: '24', rgb:'rgb(216,120,140)'},
                {id: 'blue',            no: '27', rgb:'rgb(0,67,146)'},
                {id: 'violet',          no: '28', rgb:'rgb(148,112,180)'},
                {id: 'baby-blue',       no: '30', rgb:'rgb(175,204,212)'},
                {id: 'turquoise',       no: '31', rgb:'rgb(77,158,150)'},
                {id: 'purple',          no: '38', rgb:'rgb(45,30,102)'},
                {id: 'fire-red',        no: '39', rgb:'rgb(192,34,40)'},
                {id: 'slate-blue',      no: '40', rgb:'rgb(85,108,135)'},
                {id: 'coral',           no: '42', rgb:'rgb(244,204,156)'},
                {id: 'forest-green',    no: '48', rgb:'rgb(0,82,60)'},
                {id: 'french-vanilla',  no: '50', rgb:'rgb(240,230,166)'},
                {id: 'key-lime',        no: '51', rgb:'rgb(184,205,129)'},
                {id: 'white-pearl',     no: '60', rgb:'rgb(231,225,219)'},
                {id: 'pink-pearl',      no: '61', rgb:'rgb(233,204,197)'},
                {id: 'blue-pearl',      no: '62', rgb:'rgb(188,208,204)'},
                {id: 'champagne',       no: '63', rgb:'rgb(236,224,208)'}
            ],
            sizes: [
                {id: '15MR'},
                {id: '16MR'},
                {id: '17MR'},
                {id: '18MR'},
                {id: '19MR'},
                {id: '20MR'},
                {id: '22MR'},
                {id: '24MR'},
                {id: '16ML'},
                {id: '17ML'},
                {id: '18ML'},
                {id: '19ML'},
                {id: '20ML'},
                {id: '22ML'},
                {id: '08LR'},
                {id: '10LR'},
                {id: '12LR'},
                {id: '13LR'},
                {id: '14LR'},
                {id: '16LR'},
                {id: '18LR'},
                {id: '20LR'},
                {id: '22LR'},
                {id: '10LL'},
                {id: '12LL'},
                {id: '14LL'}
            ]
        }

        $http.defaults.headers.common['X-Parse-Application-Id'] = '3qPFGCHGXKxiM61xwqrzOiuJEN9VJvLeEYNy6oym';
        $http.defaults.headers.common['X-Parse-REST-API-Key'] = 'w0fB3W1ug5gSq3YCJksPDLn2un9GOgRGdnvu05qc';

        return {
            straps: straps,
            getStraps: function(){
                return this.straps;
            }
        }
  });
