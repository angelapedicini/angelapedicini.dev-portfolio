// Componente "striscia app": crea un link per ogni app di apps.js
function createAppStrip(app) {
  var a = document.createElement("div");
  a.className = "strip";

  var icon = document.createElement("div");
  icon.className = "strip-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' +
    app.icon + "</svg>";

  var body = document.createElement("div");
  body.className = "strip-body";

  var head = document.createElement("div");
  head.className = "strip-head";
  var title = document.createElement("h2");
  title.textContent = app.name;
  var status = document.createElement("span");
  status.className = "status";
  var dot = document.createElement("span");
  dot.className = "dot";
  status.appendChild(dot);
  status.appendChild(document.createTextNode(app.status));
  head.appendChild(title);
  head.appendChild(status);

  var desc = document.createElement("p");
  desc.textContent = app.description;

  var tags = document.createElement("div");
  tags.className = "tags";
  app.tags.forEach(function (t) {
    var s = document.createElement("a");
    s.className = "tag";
    s.href = t.url;
    s.target = "_blank";
    s.rel = "noopener";
    s.textContent = t.name;
    s.title = "Documentazione di " + t.name;
    tags.appendChild(s);
  });

  body.appendChild(head);
  body.appendChild(desc);
  body.appendChild(tags);

  var actions = document.createElement("div");
  actions.className = "strip-actions";

  var open = document.createElement("a");
  open.className = "open";
  open.href = app.url;
  open.textContent = "Apri";

  var repo = document.createElement("a");
  repo.className = "repo";
  repo.href = app.repo;
  repo.target = "_blank";
  repo.rel = "noopener";
  repo.textContent = "Codice";
  repo.setAttribute("aria-label", "Codice di " + app.name + " su GitHub");

  actions.appendChild(open);
  actions.appendChild(repo);

  a.appendChild(icon);
  a.appendChild(body);
  a.appendChild(actions);
  return a;
}

var list = document.getElementById("apps");
window.APPS.forEach(function (app) {
  list.appendChild(createAppStrip(app));
});