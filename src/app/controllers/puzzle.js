

exports.load_puzzle = async(req,res) => {
    res.locals.metaTags = {
        title: 'Puzzle Hunt',
    };
    res.render('puzzle');
};

exports.load_rules = async(req,res) => {
    res.locals.metaTags = {
        title: 'Puzzle Hunt Rules',
    };
    res.render('puzzle_rules');
};

exports.load_map = async(req,res) => {
    res.locals.metaTags = {
        title: 'Mathematica',
    };
    res.render('puzzle_map');
};

exports.load_tree = async(req,res) => {
    res.locals.metaTags = {
        title: 'Abstracton',
    };
    res.render('puzzle_tree');
};

exports.load_rings = async(req,res) => {
    res.locals.metaTags = {
        title: 'Deltopolis',
    };
    res.render('puzzle_rings');
};

exports.load_final = async(req,res) => {
    res.locals.metaTags = {
        title: 'Capital',
    };
    res.render('puzzle_final');
};
