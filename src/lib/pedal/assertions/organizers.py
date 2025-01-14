from pedal.report.imperative import MAIN_REPORT
from pedal.assertions.setup import _setup_assertions, AssertionException
from functools import wraps

def contextualize_calls():
    pass


class _finish_section:
    def __init__(self, number, *functions):
        if isinstance(number, int):
            self.number = number
        else:
            self.number = -1
            functions = [number] + list(functions)
        self.functions = functions
        for function in functions:
            self(function, False)

    def __call__(self, f=None, quiet=True):
        if f is not None:
            f()
        if quiet:
            print("\tNEXT SECTION")

    def __enter__(self):
        pass

    def __exit__(self, x, y, z):
        print("\tNEXT SECTION")
        # return wrapped_f


def finish_section(number, *functions, next_section=False):
    if len(functions) == 0:
        x = _finish_section(number, *functions)
        x()
    else:
        result = _finish_section(number, *functions)
        if next_section:
            print("\tNEXT SECTION")
        return result

def section(*args):
    '''
    '''
    _setup_assertions(MAIN_REPORT)
    def wrap(f):
        MAIN_REPORT['assertions']['functions'].append(f)
        return f
    section_number = -1
    if len(args) >= 1 and callable(args[0]):
        if len(args) >= 2:
            section_number = args[1]
        return wrap(args[0])
    elif len(args) >= 1:
        section_number = args[0]
    return wrap

def phase(name):
    _setup_assertions(MAIN_REPORT)
    def wrap(f):
        @wraps(f)
        def _handle_entry(*args, **kwargs):
            old_exception_state = MAIN_REPORT['assertions']['exceptions']
            MAIN_REPORT['assertions']['exceptions'] = True
            value = f(*args, **kwargs)
            MAIN_REPORT['assertions']['exceptions'] = old_exception_state
            return value
        MAIN_REPORT['assertions']['functions'].append(_handle_entry)
        return _handle_entry
    return wrap
    
def stop_on_failure(f):
    _setup_assertions(MAIN_REPORT)
    @wraps(f)
    def wrapped(*args, **kwargs):
        old_exception_state = MAIN_REPORT['assertions']['exceptions']
        MAIN_REPORT['assertions']['exceptions'] = True
        value = None
        try:
            value = f(*args, **kwargs)
        except AssertionException:
            pass
        MAIN_REPORT['assertions']['exceptions'] = old_exception_state
        return value
    return wrapped


def try_all():
    _setup_assertions(MAIN_REPORT)
    @wraps(f)
    def wrapped(*args, **kwargs):
        old_exception_state = MAIN_REPORT['assertions']['exceptions']
        MAIN_REPORT['assertions']['exceptions'] = False
        value = f(*args, **kwargs)
        MAIN_REPORT['assertions']['exceptions'] = old_exception_state
        return value
    return wrapped


def precondition(function):
    pass


def postcondition(function):
    pass
