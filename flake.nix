{
  description = "Nix Flake for kf-website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      with import nixpkgs { inherit system; };
      let project = pkgs.callPackage ./yarn-project.nix { } { src = ./.; };
      in {

        defaultPackage = project.overrideAttrs (oldAttrs: {
          buildInputs = oldAttrs.buildInputs ++ [ pkgs.python3 ];
          buildPhase = "yarn build";
          installPhase = "mv public $out";
        });

        devShell = pkgs.mkShell { buildInputs = [ yarn ]; };
      });
}

# Local Variables:
# compile-command: "nix build"
# eval: (add-hook 'after-save-hook 'recompile nil t)
# End:
