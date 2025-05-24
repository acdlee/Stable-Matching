import pytest
from gale_shapley import GaleShapley as gs

test_cases = [
    {
        "M": [1, 2, 3],
        "W": [1, 2, 3],
        "m_pref": [
            [1, 3, 2],
            [1, 2, 3],
            [2, 1, 3],
        ],
        "w_pref": [
            [2, 3, 1],
            [3, 2, 1],
            [2, 3, 1],
        ],
        "expected": [(1, 3), (2, 1), (3, 2)]
    },
    {
        "M": [1, 2, 3],
        "W": [1, 2, 3],
        "m_pref": [
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
        ],
        "w_pref": [
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
        ],
        "expected": [(1, 1), (2, 2), (3, 3)]
    },
    {
        "M": [1, 2, 3],
        "W": [1, 2, 3],
        "m_pref": [
            [3, 2, 1],
            [3, 2, 1],
            [3, 2, 1],
        ],
        "w_pref": [
            [3, 2, 1],
            [3, 2, 1],
            [3, 2, 1],
        ],
        "expected": [(1, 1), (2, 2), (3, 3)]
    },
    {
        "M": [1, 2],
        "W": [1, 2],
        "m_pref": [
            [1, 2],
            [1, 2],
        ],
        "w_pref": [
            [1, 2],
            [2, 1],
        ],
        "expected": [(1, 1), (2, 2)]
    },
    {
        "M": [1, 2, 3, 4],
        "W": [1, 2, 3, 4],
        "m_pref": [
            [1, 2, 3, 4],
            [2, 1, 4, 3],
            [3, 4, 1, 2],
            [4, 3, 2, 1],
        ],
        "w_pref": [
            [2, 1, 3, 4],
            [1, 2, 3, 4],
            [4, 3, 2, 1],
            [3, 4, 1, 2],
        ],
        "expected": [(1, 1), (2, 2), (3, 3), (4, 4)]
    }
]

@pytest.fixture
def gs_alg():
    """The Gale Shapley algorithm that will be available for all tests."""
    gs_alg = gs()
    return gs_alg

# (self, M, W, m_pref, w_pref)
def test_case1(gs_alg):
    """Test Gale Shapley algorithm on test case 1."""
    M, W, m_pref, w_pref = test_cases[0]["M"], test_cases[0]["W"], test_cases[0]["m_pref"], test_cases[0]["w_pref"],
    result = gs_alg.match(M, W, m_pref, w_pref)
    assert result == test_cases[0]["expected"]

def test_case2(gs_alg):
    """Test Gale Shapley algorithm on test case 2."""
    M, W, m_pref, w_pref = test_cases[1]["M"], test_cases[1]["W"], test_cases[1]["m_pref"], test_cases[1]["w_pref"],
    result = gs_alg.match(M, W, m_pref, w_pref)
    assert result == test_cases[1]["expected"]

def test_case3(gs_alg):
    """Test Gale Shapley algorithm on test case 3."""
    M, W, m_pref, w_pref = test_cases[2]["M"], test_cases[2]["W"], test_cases[2]["m_pref"], test_cases[2]["w_pref"],
    result = gs_alg.match(M, W, m_pref, w_pref)
    assert result == test_cases[2]["expected"]

def test_case4(gs_alg):
    """Test Gale Shapley algorithm on test case 4."""
    M, W, m_pref, w_pref = test_cases[3]["M"], test_cases[3]["W"], test_cases[3]["m_pref"], test_cases[3]["w_pref"],
    result = gs_alg.match(M, W, m_pref, w_pref)
    assert result == test_cases[3]["expected"]

def test_case5(gs_alg):
    """Test Gale Shapley algorithm on test case 5."""
    M, W, m_pref, w_pref = test_cases[4]["M"], test_cases[4]["W"], test_cases[4]["m_pref"], test_cases[4]["w_pref"],
    result = gs_alg.match(M, W, m_pref, w_pref)
    assert result == test_cases[4]["expected"]