from string import ascii_letters
from hashlib import md5

from django.conf import settings
from django.utils import timezone

numbers = ''.join(map(lambda x: str(x), range(10)))
char_list = [*ascii_letters, *numbers]

def map_int_to_char(iterable, char_iterable=char_list) -> str:
    return ''.join([char_iterable[char] for char in iterable])

def generate_code(ip_address, base=len(char_list)):
    seed = ip_address + timezone.now().__str__()
    encoded_text = md5(seed.encode())
    encoded_text_as_int = int(encoded_text.hexdigest(), 16)
    digits = list()
    while encoded_text_as_int > 0:
        encoded_text_as_int, remainder = divmod(
            encoded_text_as_int,
            base
        )
        digits.append(remainder)
    code = map_int_to_char(digits)[:settings.URL_LENGTH]
    return code

def get_ip_address(request):
    presumed_ip = request.META.get('HTTP_X_FORWARDED_FOR')
    return \
        presumed_ip.split(',')[0] \
            if presumed_ip is not None \
                else \
                    request.META.get('REMOTE_ADDR')