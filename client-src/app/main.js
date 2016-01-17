export function configure(aurelia) 
{
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    init(aurelia);
        
    aurelia.start().then(() => aurelia.setRoot('app/ui/home/home'));
}


//Application's custom startup code
function init(aurelia)
{
    console.log('Your custom bootstrapping code could go here');
}