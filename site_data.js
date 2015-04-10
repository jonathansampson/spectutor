(function () {
	
	var menus = [
		{
			id: 0,
			label: "HTML Elements",
			items: [
				{ id:  0, label: "Global Attributes"    },
				{ id:  1, label: "The Root Element"     },
				{ id:  2, label: "Document Metadata"    },
				{ id:  3, label: "Section Elements"     },
				{ id:  4, label: "Grouping Contents"    },
				{ id:  5, label: "Text-level Semantics" },
				{ id:  6, label: "Linking Elements"     },
				{ id:  7, label: "Editing Markers"      },
				{ id:  8, label: "Embedded Content"     },
				{ id:  9, label: "Tabular Data"         },
				{ id: 10, label: "Forms and Input"      },
				{ id: 11, label: "Interactive Elements" },
				{ id: 12, label: "Scripting Elements"   }
			]
		},
		{
			id: 1,
			label: "Section Elements",
			items: [
				{ id: 0, label: "body"     },
				{ id: 1, label: "article"  },
				{ id: 2, label: "section"  },
				{ id: 3, label: "nav"      },
				{ id: 4, label: "aside"    },
				{ id: 5, label: "h1 to h6" },
				{ id: 6, label: "header"   },
				{ id: 7, label: "footer"   },
				{ id: 8, label: "address"  }
			],
			parentMenu: 0,
			parentItem: 3
		}
	];

}());