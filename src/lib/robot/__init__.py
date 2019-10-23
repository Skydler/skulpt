import urllib.request as url


def _make_request(direction, seconds):
    elem = url.urlopen('http://192.168.1.1/'+direction+'/+'+str(seconds))
    print(elem.read())
    print(direction)
    print(seconds)


def avanzar(seconds):
    _make_request('forward', seconds)


def retroceder(seconds):
    _make_request('backward', seconds)


def derecha(seconds):
    _make_request('right', seconds)


def izquierda(seconds):
    _make_request('left', seconds)
