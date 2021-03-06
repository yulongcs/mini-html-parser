import Handler from 'domhandler';
import { Parser } from 'htmlparser2';

function transformNode(node) {
  if (['tag', 'text'].indexOf(node.type) === -1) {
    throw new Error(`not supported name ${node.name} of type ${node.type}`);
  }
  if (node.type === 'text') {
    return {
      type: node.type,
      text: node.data,
    };
  }
  return {
    name: node.name,
    children: transform(node.children),
    attrs: node.attribs,
  };
}

function transform(nodes) {
  return nodes.map(transformNode);
}

export default function parse(html, done) {
  const handler = new Handler(function(err, children) {
    if (err) {
      console.error(err);
      done(err);
    }
    try {
      done(null, transform(children));
    } catch (e) {
      console.error(e);
      done(e);
    }
  }, {});

  const parser = new Parser(handler, { xmlMode: true });

  parser.write(html);
  parser.done();
}
