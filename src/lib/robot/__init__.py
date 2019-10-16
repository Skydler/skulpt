import urllib.request as url


def _make_request(direction, seconds):
    elem = url.urlopen("https://jsonplaceholder.typicode.com/posts/42")
    print(elem.read())
    print(direction)
    print(seconds)


def avanzar(seconds):
    _make_request('adelante', seconds)


def retroceder(seconds):
    _make_request('atras', seconds)


def derecha(seconds):
    _make_request('derecha', seconds)


def izquierda(seconds):
    _make_request('izquierda', seconds)
