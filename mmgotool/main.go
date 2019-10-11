// Copyright (c) 2015-present Flywave, Inc. All Rights Reserved.
// See License.txt for license information.

package main

import (
	"os"

	"github.com/flywave/flywave-utilities/mmgotool/commands"
)

func main() {
	if err := commands.Run(os.Args[1:]); err != nil {
		os.Exit(1)
	}
}
